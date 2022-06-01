import Layout from './component/Layout'

export default function Home({foods}) {
  return (
    <Layout>
      <ul>
      {foods.map((food) => (
        <li>{food.id} {food.name} {food.coverimage} </li>
      ))}
    </ul>
    </Layout>
  )
}
export async function getStaticProps() {
  
  const res = await fetch('http://localhost:3333/foods')
  const foods = await res.json()

  
  return {
    props: {
      foods,
    },
  }
}
