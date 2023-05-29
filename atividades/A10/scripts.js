const masks = {
  cpf (value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  },


  money (value) {
    const cleanValue = +value.replace(/\D+/g, '')
    const options = { style: 'currency', currency: 'BRL' }
    return new Intl.NumberFormat('pt-br', options).format(cleanValue / 100)
  },

  date (value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\/\d{2})(\d)/, '$1/$2')
      .replace(/(\/\d{4})\d+?$/, '$1')
  },

  dateWithDashes (value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1-$2')
      .replace(/(-\d{2})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  },

  hour (value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1:$2')
      .replace(/(:\d{2})\d+?$/, '$1')
  },
}

document.querySelectorAll('input').forEach($input => {
  const field = $input.dataset.js

  $input.addEventListener('input', e => {
    e.target.value = masks[field](e.target.value)
  }, false)
})