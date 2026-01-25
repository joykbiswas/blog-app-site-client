import BlogCard from "@/components/modules/homepage/Blogcard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";



export default async function Home() {
 
  const { data } = await blogService.getBlogPosts({
    isFeatured: false,
    search: ""
  },{
    cache: "no-store"
  });

 
  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
      {
        data?.data.map((post: BlogPost) =>(
          <BlogCard key={post.id} post={post}/>
        ))
      }
    </div>
  );
}
