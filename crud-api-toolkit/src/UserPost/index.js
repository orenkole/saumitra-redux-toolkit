import React, {useState} from 'react';
import {Button, Input, Space} from "antd";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const [id, setId] = useState();

  const fetchUserPost = () => {

  }

  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Fetch Post</h1>
      <Input
        placeholder="Enter user id"
        type="number"
        onChange={e => setId(e.target.value)}
        value={id}
        style={{ width: '300px' }}
      />
      <br />
      <br />
      <Space size="small" style={{ margin: '10px' }}>
        <Button type="primary" onClick={fetchUserPost}>Fetch User post</Button>
        <Button type="primary" onClick={() => navigate("/createPost")}>Create user post</Button>
      </Space>
    </div>
  );
};

export default Home;
