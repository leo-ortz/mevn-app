import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import CreateProfile from '@/components/CreateProfile'
import ForgotPassword from '@/components/ForgotPassword'
import Dashboard from '@/components/Dashboard'
import Todo from '@/components/Todo'
import Admin from '@/components/Admin'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
import Users from '@/components/Users'
import CreateUser from '@/components/CreateUser'
import ViewUser from '@/components/ViewUser'
import EditUser from '@/components/EditUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Main
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/create-profile',
      name: 'create-profile',
      component: CreateProfile
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/users/create',
      name: 'users-create',
      component: CreateUser
    },
    {
      path: '/users/:userId',
      name: 'user',
      component: ViewUser
    },
    {
      path: '/users/:userId/edit',
      name: 'user-edit',
      component: EditUser
    }
  ]
})
