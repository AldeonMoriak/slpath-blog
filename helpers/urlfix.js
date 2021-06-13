/**
 * Used for fix Persian characters in URL
 *
 * @method URLfix
 * @param URL string
 * @return A string of fixed URL
 */
const URLfix = (value) => {
  if (!value) {
    return
  }

  // Replace every %20 with _ to protect them from decodeURI
  let old = ''
  while (old !== value) {
    old = value
    value = value.replace(
      /(http\S+?)%20/g,
      '$1\u200C\u200C\u200C_\u200C\u200C\u200C'
    )
  }

  // Decode URIs
  // NOTE: This would convert all %20's to _'s which could break some links
  // but we will undo that later on
  value = value.replace(/(http\S+)/g, (_, p) => decodeURI(p))

  // Revive all instances of %20 to make sure no links is broken
  value = value.replace(/\u200C\u200C\u200C_\u200C\u200C\u200C/g, '%20')

  return value
}

export default URLfix
