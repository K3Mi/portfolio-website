import React from 'react'

const BlogPost = ({ image, date, title, excerpt }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <p className="text-main-color text-sm mb-2">{date}</p>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{excerpt}</p>
      <a href="#" className="text-main-color hover:underline">Read More</a>
    </div>
  </div>
)

const Blog = () => {
  const posts = [
    {
      image: 'https://via.placeholder.com/400x300',
      date: 'April 1, 2023',
      title: 'The Future of Web Development',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      date: 'March 15, 2023',
      title: 'Mastering React Hooks',
      excerpt: 'Learn how to effectively use React Hooks to build powerful and efficient applications.'
    },
    {
      image: 'https://via.placeholder.com/400x300',
      date: 'February 28, 2023',
      title: 'The Importance of UI/UX Design',
      excerpt: 'Discover why good UI/UX design is crucial for the success of your digital products.'
    }
  ]

  return (
    <section id="blog" className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white" data-title="BLOG">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog