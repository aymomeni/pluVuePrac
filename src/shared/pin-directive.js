export default {
    bind: (element, binding) => {
        if(binding.arg !== 'position') return;
        // eslint-disable-next-line
        //console.log('arg:', binding.arg, ' modifiers: ', binding.modifiers);
        Object.keys(binding.modifiers).forEach((key) => {
            element.style[key] = '5px';
        });

        element.style.position = 'absolute';
    },
};