import Button from '../packages/button/index'

const components = [Button]

const install = (Vue , opts = {}) => {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '0.0.1',
    install,
    Button
}