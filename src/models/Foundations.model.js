const { Schema, model, models } = require("mongoose");

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const foundationSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El campo nombre es requerido"],
    },
    email: {
      type: String,
      required: [true, "El campo email es requerido"],
      match: [emailRegex, "Email invalido"],
      validate: [
        {
          validator(email) {
            return models.Foundation.findOne({ email })
              .then((foundation) => {
                if(!foundation || foundation._id.equals(this._id)){
                  return true;
                }
                return false;
              })
              .catch(() => false);
          },
          message: "El correo está en uso",
        },
      ],
    },
    address: {
      type: String,
      required: [true, "El campo dirección es requerido"],
    },
    phone: {
      type: String,
      required: [true, "El campo teléfono es requerido"],
    },
    logo: {
      type: String,
      default:
        "https://res.cloudinary.com/findandhelp/image/upload/v1629429997/fandh/foundations_xqvbej.gif",
    },
  },
  {
    timestamps: true,
  }
);

const Foundation = model("Foundation", foundationSchema);

module.exports = Foundation;
