import { getTest } from '@/sanity/lib/queryLoaders'

export default async function Test() {

  const testData = await getTest()

  return (
    <div>Test</div>
  )
}
