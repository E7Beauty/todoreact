import imageEdit from "../../img/edit.svg";
import imageDelete from "../../img/delete.svg";
import imageApply from "../../img/apply.svg";
import imageCancel from "../../img/cancel.svg";
import imageAdd from "../../img/add.svg";
import "./Button.scss";

const Button = ({ appearence, action, id, disabled }) => {
  let srcPath;
  let type = "button";
  const buttonAction = action ? { onClick: () => action(id) } : {};
  const buttonClassName = disabled ? "button disabled" : "button";

  switch (appearence) {
    case "edit":
      srcPath = imageEdit;
      break;
    case "delete":
      srcPath = imageDelete;
      break;
    case "apply":
      srcPath = imageApply;
      type = "submit";
      break;
    case "cancel":
      srcPath = imageCancel;
      break;
    case "add":
      srcPath = imageAdd;
      type = "submit";
      break;
    default:
      console.log("error");
      return;
  }

  return (
    <button type={type} className={buttonClassName} {...buttonAction} disabled={disabled}>
      <img src={srcPath} alt={type} className="button__image" />
    </button>
  );
};

export default Button;
