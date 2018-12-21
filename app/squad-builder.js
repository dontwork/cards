import tools from './tools'
import pitch from './pitch'

export default function (vnode) {

  return {
    view () {
      return m('.squad-builder',[
        m('.tools-container', m(tools)),
        m('.pitch-container', m(pitch)
      ])
    }
  }
}