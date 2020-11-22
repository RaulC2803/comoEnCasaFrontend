import React from "react";
import md5 from "md5";
import { Image } from "react-bootstrap";

function Gravatar(props) {
  const email = props.src;
  const hash = md5(email);

  return (
    <Image
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
      roundedCircle
    />
  );
}

export default Gravatar;
