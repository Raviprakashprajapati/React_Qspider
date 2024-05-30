import React from 'react'

function Evenet04() {

    function handleScroll(e){
        e.target.style.background="yellow"
    }


    window.addEventListener("resize",()=>{
        console.log(window.innerWidth,window.innerHeight)
    })


  return (
    <div>
      
      <p  style={{width:"400px",height:"400px",border:"10px solid red",overflow:"auto"}} onScroll={handleScroll} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius impedit nihil magnam tenetur rem deserunt, earum voluptates labore et cum saepe eligendi quidem sed corrupti delectus cupiditate officia omnis asperiores? Minima maiores quidem officiis blanditiis neque quis corporis corrupti nulla. Tempore nihil mollitia itaque cumque facere. Velit impedit nulla quasi magnam. Aliquid deserunt corporis distinctio adipisci molestias neque et voluptate praesentium illo autem ullam consequuntur illum expedita, mollitia assumenda, vel rerum. Illum, in repellat minus distinctio quaerat optio nostrum delectus neque recusandae, ad quas sit aliquid vero velit? Eveniet nulla repudiandae voluptate exercitationem molestiae sint voluptas, nisi et nostrum ipsam est autem inventore quod, earum blanditiis, labore perspiciatis necessitatibus cumque temporibus doloribus corporis saepe nobis explicabo! Nam eligendi quis dolorum corrupti, ducimus eius. Ducimus, ullam, quam assumenda mollitia ratione minima error dolore dolor vero cumque numquam modi consequuntur iste earum quasi suscipit voluptatum, repudiandae animi tenetur sint quidem in! Fugiat, quod. Deserunt id ipsa quaerat libero eius officia cum voluptates culpa neque cumque. Ad dolorem similique doloremque voluptas quibusdam quae hic deserunt alias sunt voluptates pariatur beatae rem natus quisquam enim nisi deleniti, error et placeat dolor itaque recusandae quis eaque quidem. Aspernatur vitae velit nemo tempora repudiandae aperiam animi minima corrupti eius eum hic, voluptates libero neque incidunt pariatur aut itaque amet, eaque fugit? Rerum consequuntur excepturi fugit delectus eos, nisi quo nulla provident dignissimos. Doloribus sed error reiciendis fugit veniam eaque, molestias odio aliquid deserunt tempore ex dolorum libero provident iure ipsam animi voluptates repellendus blanditiis doloremque voluptatum quidem quos. Voluptatum architecto distinctio amet error minus, aspernatur fuga iusto, nulla sapiente atque itaque beatae reprehenderit placeat unde vero at, ipsum debitis. Est repellat error, officiis ex natus aut alias beatae nisi maiores! Quis quas odit neque ducimus assumenda dolore modi laboriosam voluptatem dignissimos voluptate aspernatur quae soluta recusandae, dicta beatae sapiente. Assumenda modi animi autem illum facere culpa nemo, nesciunt cumque itaque asperiores quaerat minus facilis ex aspernatur unde. Vel deserunt quibusdam, debitis necessitatibus, ratione voluptate perferendis beatae sequi praesentium, ipsa aperiam earum magnam? Aliquid quam sunt ducimus iusto, ipsa placeat culpa recusandae magni mollitia natus totam, laudantium debitis commodi deleniti nulla excepturi laboriosam necessitatibus nobis assumenda? Non adipisci suscipit tempora labore soluta maxime illo nemo consectetur unde ut! Consequuntur rem nam iure sit voluptatibus, aspernatur accusantium quaerat quo adipisci possimus cum magni aliquid, laborum enim autem harum facere veritatis non quasi hic. Autem maxime dolorem ex.</p>

    </div>
  )
}

export default Evenet04
