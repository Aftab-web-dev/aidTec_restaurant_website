import {} from 'react'
import './menu.css'
import Card from './Card'

const Menu = ( { img , name , price }) => {
  return (
    <>
    <div className='menu' >
    <h1>Menu</h1>
    <div className='menucard' >
    <Card  img={"https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52250.jpg?w=900"} name={"Special Briyani"} price={"₹ 899"} button={"Add now"}/>
    <Card img={"https://img.freepik.com/premium-photo/chicken-biryani-kerala-dum-biriyani-made-using-jeera-rice-spices-arranged-earthenware_527904-537.jpg?w=900"} name={"Chichen briyani"} price={"₹ 599"} button={"Add now"} />
    <Card img={"https://img.freepik.com/premium-photo/mutton-curry-lamb-curry-spicy-indian-cuisine_527904-4007.jpg?w=900"} price={"₹ 499"} name={"Mutton Curry"} button={"Add now"}/>
    <Card img={"https://img.freepik.com/premium-photo/indian-chicken-curry-chicken-masala-indian-spicy-chicken-thick-gravy-garnished-with-coriander-leaf-lemon-slices-arranged-white-ceramic-table-ware-serving-bowl-white-background-is_527904-1997.jpg?w=900"} name={"Chichen Curry"} price={"₹ 399"} button={"Add now"}/>
    <Card img={"https://img.freepik.com/premium-photo/chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-spices-arranged-white-ceramic-table-ware-with-white-background-isolated_527904-1963.jpg?w=900"} name={"Mumbai Briyani"} price={"₹ 499"} button={"Add now"}/>
    <Card img={"https://img.freepik.com/premium-photo/chicken-biryani-made-using-jeera-rice-spices-arranged-red-table-ware_527904-3926.jpg?w=900"} name={"Hyderbad briyani"} price={"₹ 399"} button={"Add now"}/>
    <Card  img={"https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52250.jpg?w=900"} name={"Special Briyani"} price={"₹ 899"} button={"Add now"}/>
    <Card img={"https://img.freepik.com/premium-photo/chicken-biryani-kerala-dum-biriyani-made-using-jeera-rice-spices-arranged-earthenware_527904-537.jpg?w=900"} name={"Chichen briyani"} price={"₹ 599"} button={"Add now"} />
    <Card img={"https://img.freepik.com/premium-photo/mutton-curry-lamb-curry-spicy-indian-cuisine_527904-4007.jpg?w=900"} price={"₹ 499"} name={"Mutton Curry"} button={"Add now"}/>
    <Card img={"https://img.freepik.com/premium-photo/indian-chicken-curry-chicken-masala-indian-spicy-chicken-thick-gravy-garnished-with-coriander-leaf-lemon-slices-arranged-white-ceramic-table-ware-serving-bowl-white-background-is_527904-1997.jpg?w=900"} name={"Chichen Curry"} price={"₹ 399"} button={"Add now"}/>
    <Card img={"https://img.freepik.com/premium-photo/chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-spices-arranged-white-ceramic-table-ware-with-white-background-isolated_527904-1963.jpg?w=900"} name={"Mumbai Briyani"} price={"₹ 499"} button={"Add now"}/>
    <Card img={"https://img.freepik.com/premium-photo/chicken-biryani-made-using-jeera-rice-spices-arranged-red-table-ware_527904-3926.jpg?w=900"} name={"Hyderbad briyani"} price={"₹ 399"} button={"Add now"}/>

    </div>

    </div>

    </>
  )
}

export default Menu