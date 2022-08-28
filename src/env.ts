import { config } from 'dotenv'
import { cleanEnv, num, str } from 'envalid'

config()

export default cleanEnv(process.env, {
  BOT_TOKEN: str(5576982523:AAEbyCrJ6XsSqH4hoQevMCHWtL1ytFeuxuw),
  STRING_SESSION: str(1BQANOTEuMTA4LjU2LjEzMAG7QKdvYeceQxO1QVJkijnu7v2HkCvPqX8eg0xt0+z6FwfKdrY2O92FlsFG8eqNVFyaKc0rc+okmavCWEmcMS2fsxJ3ZsRjgnQMcOEWlijvQveIzoXDdTY4m+H3HBEoTCtxExoPfxD+yilmAEX9+OS8BP9iqBN7mTAFp+jO8qCPpCrw59wnMa8Eo1wG4YFRPqRy92bG82zQ3ns7MFjpRbeC0h6a4bW4kueshwdXXWw8g+nqkC33XCgx9Dcy2ae6lLmiyY2Z9xlgFd5v0uIqHhNL5iup7r7rXgYs6+KDq8ZvvsVJZ7uUJcP1VYB3xVXoPsivzDvDE1e7KbG7TEwl1h06xQ==),
  API_ID: num(11460437),
  API_HASH: str(ad621a42842ee0c86b4d51189ce4343e),
  LOCALE: str({ default: 'en' }),
  COOKIES: str({ default: '' }),
  MAX_PLAYLIST_SIZE: num({ default: 10 }),
})
