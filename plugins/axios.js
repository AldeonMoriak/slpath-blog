const axiosPlugin = (context) => {
  context.$axios.onResponse((response) => {
    // console.log(config.status)
    if (response.status === 401) context.redirect('/login')
  })

  context.$axios.onError((error) => {
    const code = parseInt(error.response.status, 10)
    if (code === 401) {
      context.$auth.reset()
      context.redirect('/login')
    }
    return Promise.reject(error.response.data)
  })
}

export default axiosPlugin
