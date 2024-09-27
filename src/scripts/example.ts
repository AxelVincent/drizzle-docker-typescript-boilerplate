import 'dotenv/config'
import { db } from 'src/db/db'

const main = async () => {
  const res = await db.query.user.findFirst()
  console.log(res)
  process.exit(0)
}

main()
