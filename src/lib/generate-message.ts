import { useCartStore } from "@/stores/cart-store"
import { useCheckoutStore } from "@/stores/checkout-store"

export const generateMessage = () => {
    const { nome, cnpj, endereco, email, telefone, pagamento, frete, } = useCheckoutStore(state => state)
    const { cart } = useCartStore(state => state)

    let pedidos = []
    for (let item of cart) {
        pedidos.push(`${item.quantity} x ${item.product.linha} (${item.product.materias[item.selectedMaterialIndex]}): ${item.quantity * item.price}`)
    }

    return `**Dados do Cliente:**
Nome: ${nome}
CNPJ: ${cnpj}
Endereço: ${endereco}
E-mail: ${email}
Telefone: ${telefone}
Forma de pagamento: ${pagamento}
Frete: ${frete}

----------------
**Pedido**
${pedidos.join("\n")}
`
}