import { useEffect, useState } from "react";

const useFocus = (ref) => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (isEditing) {
      ref.current.focus();
    } else {
      ref.current.blur();
    }
  }, [isEditing]);

  return { isEditing, setIsEditing };
};

export default useFocus;
