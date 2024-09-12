const PostDetailPage = async ({ params }) => {
  const postId = params.singlePost;
  console.log(postId);
  const postItem = await fetch(`http://localhost:3000/blogs/${postId}`, {
    cache: "no-store",
  });

  // if (!postItem) {
  //   notFound();
  // }
  return (
    <>
      <article className="post-article">
        <header>
          <h1>{postItem.category}</h1>
          <h1>{postItem.title}</h1>
          <div className={styles.author}>
            <Image
              src={`/images/${postItem.authorImage}`}
              alt="image"
              width={36}
              height={36}
            />
            <h6 className={styles.h6}>{postItem.author}</h6>
            <h6 className={styles.h6}>{postItem.date}</h6>
          </div>

          <img src={`/images/posts/${postItem.image}`} alt={postItem.title} />
        </header>
        {/* <p>{postItem.content}</p> */}
      </article>
    </>
  );
};

export default PostDetailPage;
