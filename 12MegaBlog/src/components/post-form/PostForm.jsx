import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  // jo bhi is form ko use karega vo dega defaultValue
  // we can pass object
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        // if post is avail then use title otherwise empty string
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  // to take user data
//   taking from store
  const userData = useSelector((state) => state.user.userData);
  //if form has submitted

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if(dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
    }
    else{
     // todo => file is avail or not
     const file=await appwriteService.uploadFile(data.image[0])
     if (file){
      const fileID = file.$id
      data.featuredImage=fileID
    const dbPost=  await appwriteService.createPost({
          ...data,
          userId:userData.$id
      })
      if(dbPost){
          navigate(`/post/${dbPost.$id}`)
      }

     }
    }

  };
// watch title and generate slug
const slugTransform=useCallback((value)=>{
    if(value && typeof value ==='string'){
     // ^[a-zA-Z\d\s] => do not include this
     // (/\s/g,'-') => look globally use - instead of space
     return value.trim().toLowerCase().replace(/^[a-zA-Z\d\s]+/g,'-').replace(/\s/g,'-')
    }
    else{
     return " "
    }
},[])
React.useEffect(()=>{
     const subscription=watch((value,{name})=>{
          if(name=== 'title'){
               setValue('slug',slugTransform(value.title,{
                    shouldValidate:true
               }))
          }
     })

     // to memeory management
     return ()=>{
          subscription.unsubscribe()
     }
},[watch,slugTransform,setValue])
  return (

     <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
     <div className="w-2/3 px-2">
         <Input
             label="Title :"
             placeholder="Title"
             className="mb-4"
             {...register("title", { required: true })}
         />
         <Input
             label="Slug :"
             placeholder="Slug"
             className="mb-4"
             {...register("slug", { required: true })}
          //    how we will get input
             onInput={(e) => {
                 setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
             }}
         />
         <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
     </div>
     <div className="w-1/3 px-2">
         <Input
             label="Featured Image :"
             type="file"
             className="mb-4"
             accept="image/png, image/jpg, image/jpeg, image/gif"
             {...register("image", { required: !post })}
         />
         {post && (
             <div className="w-full mb-4">
                 <img
                     src={appwriteService.getFilePreview(post.featuredImage)}
                     alt={post.title}
                     className="rounded-lg"
                 />
             </div>
         )}
         <Select
             options={["active", "inactive"]}
             label="Status"
             className="mb-4"
             {...register("status", { required: true })}
         />
         <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
             {post ? "Update" : "Submit"}
         </Button>
     </div>
 </form>
  )
  
}
export default PostForm