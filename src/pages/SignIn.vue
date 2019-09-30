<template>
  <q-page padding class="row center items-start justify-center">
    <!-- <div style="width: 500px; max-width: 90vw;"> -->
    <q-card>
      <q-card-media class="header">
        <img src="/statics/logo.png">
      </q-card-media>

      <q-card-main>
        <q-field
          label="Username"
          orientation="vertical"
          :error="usernameError"
          error-label="We need a valid email"
        >
          <q-input v-model="username" @input="$v.username.$touch" />
        </q-field>

        <q-field
          label="Password"
          orientation="vertical"
          :error="passwordError"
          error-label="pwd error label"
          :warning="passwordWarning"
          warning-label="Debe contener al menos un número, una letra minúscula, una mayúscula, un símbolo y mínimo 8 dígitos"
        >
          <q-input type="password" v-model="password" @input="$v.password.$touch" />
        </q-field>
      </q-card-main>

      <q-card-separator />

      <q-card-actions align="end">
        <q-btn label="Login" color="primary" @click="login" :disabled="submitDisabled" />
      </q-card-actions>

    </q-card>
    <!-- </div> -->

    <q-dialog
      v-model="confirmUserDialogShow"
      stack-buttons
      prevent-close
      @ok="requestNewPwd">

      <span slot="title">Nuevo usuario</span>
      <div slot="body">
        <q-field
          label="Contraseña"
          orientation="vertical"
          :error="$v.newPassword.$error"
        >
          <q-input v-model="newPassword" type="password" />
        </q-field>
        <q-field
          label="Repetir contraseña"
          orientation="vertical"
          :error="$v.newPasswordRepeat.$error"
        >
          <q-input v-model="newPasswordRepeat" type="password" />
        </q-field>

        <q-list
          no-border>
          <q-item v-if="!$v.newPassword.required || !$v.newPassword.hasAnUpperCaseLetter">
            <q-item-side icon="check_box_outline_blank"/>
            <q-item-main label="Debe tener mayúsculas"/>
          </q-item>
          <q-item v-else class="valid-rule">
            <q-item-side text-color="secondary" icon="check_box"/>
            <q-item-main label="Debe tener mayúsculas"/>
          </q-item>
          <q-item v-if="!$v.newPassword.required || !$v.newPassword.hasALowerCaseLetter">
            <q-item-side icon="check_box_outline_blank"/>
            <q-item-main label="Debe tener minúsculas"/>
          </q-item>
          <q-item v-else class="valid-rule">
            <q-item-side text-color="secondary" icon="check_box"/>
            <q-item-main label="Debe tener minúsculas"/>
          </q-item>
          <q-item v-if="!$v.newPassword.required || !$v.newPassword.hasANumber">
            <q-item-side icon="check_box_outline_blank"/>
            <q-item-main label="Debe tener números"/>
          </q-item>
          <q-item v-else class="valid-rule">
            <q-item-side text-color="secondary" icon="check_box"/>
            <q-item-main label="Debe tener números"/>
          </q-item>
          <q-item v-if="!$v.newPassword.required || !$v.newPassword.hasASymbol">
            <q-item-side icon="check_box_outline_blank"/>
            <q-item-main label="Debe tener símbolos"/>
          </q-item>
          <q-item v-else class="valid-rule">
            <q-item-side text-color="secondary" icon="check_box"/>
            <q-item-main label="Debe tener símbolos"/>
          </q-item>
          <q-item v-if="!$v.newPassword.required || !$v.newPassword.minLength">
            <q-item-side icon="check_box_outline_blank"/>
            <q-item-main label="Debe tener al menos 8 caracteres"/>
          </q-item>
          <q-item v-else class="valid-rule">
            <q-item-side text-color="secondary" icon="check_box"/>
            <q-item-main label="Debe tener al menos 8 caracteres"/>
          </q-item>
          <q-item v-if="!$v.newPassword.required || !$v.newPasswordRepeat.sameAsPassword">
            <q-item-side icon="check_box_outline_blank"/>
            <q-item-main label="Debe confirmar la contraseña"/>
          </q-item>
          <q-item v-else class="valid-rule">
            <q-item-side text-color="secondary" icon="check_box"/>
            <q-item-main label="Debe confirmar la contraseña"/>
          </q-item>
        </q-list>
      </div>

      <template slot="buttons" slot-scope="props">
        <q-btn color="primary" label="Aceptar" :disabled="$v.newPassword.$invalid || $v.newPasswordRepeat.$invalid" @click="props.ok" />
        <q-btn flat label="No thanks" @click="props.cancel" />
      </template>
    </q-dialog>
  </q-page>
</template>

<script>
import { challenges } from '@/services/auth'
import { createNamespacedHelpers } from 'vuex'
import { name as auth } from '@/store/auth'
import { types as actions } from '@/store/auth/actions'
import { types as getters } from '@/store/auth/getters'
import { required, minLength, helpers, sameAs } from 'vuelidate/lib/validators'

const { mapActions, mapGetters } = createNamespacedHelpers(auth)

export default {
  name: 'SignInPage',
  data () {
    return {
      username: '',
      password: '',

      confirmUserDialogShow: false,
      notConfirmedUser: null,
      newPassword: '',
      newPasswordRepeat: '',

      usernameError: false,
      passwordError: false
    }
  },
  validations: {
    username: { required },
    password: {
      required,
      minLength: minLength(8),
      hasASymbol: helpers.regex('aSymbol', /[!|@|#|$|%|^|&|*|(|)|-|_|.|,]/),
      hasANumber: helpers.regex('aNumber', /[0-9]/),
      hasALowerCaseLetter: helpers.regex('aLowerCase', /[a-z]/),
      hasAnUpperCaseLetter: helpers.regex('anUpperCase', /[A-Z]/)
    },
    newPassword: {
      required,
      minLength: minLength(8),
      hasASymbol: helpers.regex('aSymbol', /[!|@|#|$|%|^|&|*|(|)|-|_|.]/),
      hasANumber: helpers.regex('aNumber', /[0-9]/),
      hasALowerCaseLetter: helpers.regex('aLowerCase', /[a-z]/),
      hasAnUpperCaseLetter: helpers.regex('anUpperCase', /[A-Z]/)
    },
    newPasswordRepeat: {
      required,
      minLength: minLength(8),
      hasASymbol: helpers.regex('aSymbol', /[!|@|#|$|%|^|&|*|(|)|-|_|.]/),
      hasANumber: helpers.regex('aNumber', /[0-9]/),
      hasALowerCaseLetter: helpers.regex('aLowerCase', /[a-z]/),
      hasAnUpperCaseLetter: helpers.regex('anUpperCase', /[A-Z]/),
      sameAsPassword: sameAs('newPassword')
    }
  },
  computed: {
    ...mapGetters({
      user: getters.currentUser
    }),
    submitDisabled () {
      return this.$v.password.$error
    },
    passwordWarning () {
      if (this.password.length === 0) return false

      return this.$v.password.$error
    }
  },
  methods: {
    ...mapActions({
      loginAction: actions.login,
      completeNewPasswordAction: actions.completeNewPassword
    }),
    redirectToApp () {
      this.$router.replace('/')
    },
    requestNewPwd () {
      return this.completeNewPasswordAction({ user: this.notConfirmedUser, password: this.newPassword })
        .then(
          // Confirmada -> redirigir a su aplicacion en base al grupo, con username y refreshToken en URL
          /*
            En aplicacion destino:
              - Leer token y username de la URL
              - const user = Amplify.Auth.createCognitoUser('dlopezp')
              - const token = new AwsCognito.CognitoRefreshToken({ RefreshToken: '...' })
              - user.refreshSession(token, cb)
              - Redirect a si misma para limpiar la URL
          */
          () => this.redirectToApp()
        )
        .catch(
          error => console.warn('ko', error)
        )
      /*
      return this.$q.dialog({
        title: 'Nueva contraseña',
        message: 'Debe indicar una nueva contraseña',
        color: 'primary',
        ok: true,
        cancel: true,
        preventClose: true,
        noBackdropDismiss: false,
        noEscDismiss: false,
        noRefocus: true,
        stackButtons: true,
        position: 'top',
        prompt: {
          model: '',
          type: 'password' // optional
        }
      })
        .then(
          password => {
            // confirmar nueva pwd en cognito
            return this.completeNewPasswordAction({ user, password })
          }
        )
        .then(
          () => this.redirectToApp()
        )
        .catch(
          error => console.warn('ko', error)
        )
        */
    },
    openConfirmUserDialog () {
      this.confirmUserDialogShow = true
    },
    login () {
      this.loginAction({ username: this.username, password: this.password })
        .then(
          user => {
            if (user.challengeName === challenges.NEW_PASSWORD_REQUIRED) {
              this.notConfirmedUser = user
              return this.openConfirmUserDialog()
            }

            this.redirectToApp()
          }
        )
        .catch(
          error => {
            console.warn(error)
            this.$q.notify({
              message: 'Los datos no son correctos',
              position: 'top'
            })
          }
        )
    },
    checkUser () {
      if (this.user) this.redirectToApp()
    }
  },
  watch: {
    user (newVal, oldVal) {
      this.checkUser()
    }
  },
  mounted () {
    this.checkUser()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~variables'

  .q-card
    max-width 500px

  .q-card-media
    background-color $primary
    padding 10px 20px
</style>
