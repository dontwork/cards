import tools from './tools.js'
import pitch from './pitch.js'

export default function (vnode) {

  return {
    view () {
      return m('.squad-builder',[
        m('.tools-container', m(tools)),
        m('.pitch-container', m(pitch))
      ])
    }
  }
}
