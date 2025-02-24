import LikeButton from "./LikeButton";

const PostCard = ({ post }) => {
  return (
    <div style={{
      border: "1px solid #ddd", 
      padding: "15px", 
      marginBottom: "10px", 
      borderRadius: "10px"
    }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <img
          src={post.profilePic}
          alt="Profile"
          style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
        />
        <strong>{post.username}</strong>
      </div>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;