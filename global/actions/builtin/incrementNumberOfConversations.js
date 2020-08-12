//CHECKSUM:8b48db5e1bb56bb5d14384aed59d5ddbf707c622ddf0d037bc640598fdac05ff
/**
 * Increment the number of conversations
 * @title Increment number of conversations
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} output - The state variable to output the count to
 */
const incrementNumberOfConversations = async output => {
  const userId = event.target
  const botId = event.botId
  const key = bp.kvs.getUserStorageKey(userId, 'numberOfConversations')
  let value = await bp.kvs.forBot(event.botId).getStorageWithExpiry(key)
  // Value could be 0
  if (value === undefined) {
    value = 0
  } else {
    value++
  }

  await bp.kvs.forBot(event.botId).setStorageWithExpiry(key, value)
  temp[output] = value
}

return incrementNumberOfConversations(args.output)
