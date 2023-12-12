"use client";
import { useCartContext } from "@/components/context/CartContext";
import "../../../style/backgrounds.css";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FinalizarCompra = () => {
  const { cart, calculateTotalCost } = useCartContext();
  console.log(cart);

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos obligatorios
    if (!formData.nombreCompleto || !formData.email || !formData.telefono) {
      Swal.fire({
        title: "Campos obligatorios",
        text: "Todos los campos del formulario son obligatorios.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }
    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        title: "Formato de correo incorrecto",
        text: "Por favor, ingrese un correo electrónico válido.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    // Validar que el teléfono sea un número
    const telefonoNumber = Number(formData.telefono);
    if (isNaN(telefonoNumber)) {
      Swal.fire({
        title: "Número de teléfono incorrecto",
        text: "Por favor, ingrese un número de teléfono válido.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    const message = `Pedido:\n\n${cart
      .map(
        (product) =>
          `${product.title}, Talle: ${product.size}, Cantidad: ${product.qty}`
      )
      .join(
        "\n"
      )}\n\nTotal: $${calculateTotalCost()}\n\nDatos del Cliente:\nNombre: ${
      formData.nombreCompleto
    }\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=+5493518015096&text=${encodeURIComponent(
      message
    )}`;

    // Verificar si todos los campos están llenos antes de abrir la nueva pestaña
    if (formData.nombreCompleto && formData.email && formData.telefono) {
      // Abre el enlace en una nueva pestaña
      window.open(whatsappLink, "_blank");

      // Muestra el SweetAlert después de enviar el formulario
      Swal.fire({
        title: "¡Gracias por tu compra!",
        text: "Tu pedido ha sido enviado con éxito.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="finalizar w-full h-full flex pt-10 pl-4">
      <div className="w-1/2 h-5/6  rounded-xl bg-slate-600 opacity-90 relative ">
        <h2 className="text-white text-1xl font-bold px-8 py-4">Mi pedido</h2>
        <div>
          <table className="w-full">
            <thead className="bg-black bg-opacity-50 ">
              <tr>
                <th className="px-4 py-2 text-left ">Título</th>
                <th className="px-4 py-2 text-center">talle</th>
                <th className="px-4 py-2  text-center">Cantidad</th>
              </tr>
            </thead>
            <tbody className="">
              {cart.map((product, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-200 bg-opacity-50"
                      : "bg-gray-400 h-10 bg-opacity-50"
                  }
                >
                  <td className="px-4 py-2">{product.title}</td>
                  <td className="px-4 py-2 text-center">{product.size}</td>
                  <td className="px-4 py-2 text-center">{product.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="absolute bottom-5 h-10 w-full bg-slate-400 flex items-center justify-end pr-8">
          <p className="mr-2">Total: </p>
          <div className="font-bold"> ${calculateTotalCost()}</div>
        </div>
      </div>
      <div className=" w-1/2 flex flex-col justify-start items-center">
        <h1 className="text-white text-2xl mb-10">
          Complete los campos para finalizar la compra
        </h1>
        <form className="w-2/3 mt-4">
          <label className="block mb-2 text-white" htmlFor="nombreCompleto">
            Nombre Completo:
          </label>
          <input
            type="text"
            id="nombreCompleto"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            className="w-full p-2 mb-2 rounded"
            required
          />

          <label className="block mb-2 text-white" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-2 rounded"
            required
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          />

          <label className="block mb-2 text-white" htmlFor="telefono">
            Teléfono:
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded"
            required
            pattern="[0-9]+"
          />
        </form>

        <button
          onClick={handleSubmit}
          className="bg-lime-600 p-2 text-white rounded-lg mt-2"
        >
          Enviar pedido por <FontAwesomeIcon icon={faWhatsapp} />{" "}
        </button>
      </div>
    </div>
  );
};

export default FinalizarCompra;
