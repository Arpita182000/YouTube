import React from 'react'
const commentList = [{
    name:"Arpita Sarkar",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies:[
        {
          name:"Arpita Sarkar",
          description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
          replies:"helllpppp"
        },
        {
          name:"Arpita Sarkar",
          description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
          replies:"helllpppp"
        },
        {
          name:"Arpita Sarkar",
          description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
          replies:"helllpppp"
        },
      ]
  },
  {
    name:"Arpita Sarkar",
    description:" Optio esse fuga eum sit neque iste.",
    replies:[
        {
          name:"Arpita Sarkar",
          description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
          replies:"helllpppp"
        },
        {
          name:"Arpita Sarkar",
          description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
          replies:"helllpppp"
        },
        {
          name:"Arpita Sarkar",
          description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
          replies:"helllpppp"
        },
      ]
  },
  {
    name:"Arpita Sarkar",
    description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
    replies:[
        {
          name:"Arpita Sarkar",
          description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
          replies:"helllpppp"
        },
        {
          name:"Arpita Sarkar",
          description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
          replies:"helllpppp"
        },
        {
          name:"Arpita Sarkar",
          description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
          replies:"helllpppp"
        },
      ]
  },

  {
    name:"Arpita Sarkar",
    description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
    replies:"helllpppp"
  },
  {
    name:"Arpita Sarkar",
    description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
    replies:[
      {
        name:"Arpita Sarkar",
        description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
        replies:"helllpppp"
      },
      {
        name:"Arpita Sarkar",
        description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
        replies:"helllpppp"
      },
      {
        name:"Arpita Sarkar",
        description:" Qui fugiat eaque, eveniet cumque a autem ducimus quibusdam repellendus,",
        replies:"helllpppp"
      },
    ]
  },
  {
    name:"Arpita Sarkar",
    description:"lorem bxxhvsvx incidunt ab vel totam quis!",
    replies:"helllpppp"
  },
  {
    name:"Arpita Sarkar",
    description:"lorem bxxhvsvx incidunt ab vel totam quis!",
    replies:"helllpppp"
  },
]



function Comments({data}) {
    const{name,description}=data;

    return (
        <div className="flex justify-start items-center ">
       <div> <img
          alt="profile"
          src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
          width={70}
        /></div>
        <div className=''>
            <h3 className='text-xs font-semibold'>{name}</h3>
            <h3 className='text-[16px]'>{description}</h3>
            </div>
           

        </div>
        
    )
  }
  const CommentList =({comment})=>{
    // console.log(comment.replies)
    return(
        <div>

            {comment.map((comment,i)=>{
                // console.log(comment.replies)
                return(
                    <div key={i}>
                        <Comments data={comment} />
                        <div className='mx-10 border-l-2 border-gray-200'>
                        <Comments data={comment} />
                        <Comments data={comment} />
                        <Comments data={comment} />
                           
                        </div>
                    </div>
                )
            })}
        </div>
    )
  }

  
export default function CommentContainer() {
  return (
    <>
        <CommentList comment={commentList}/>
    </>
  )
}



  
 