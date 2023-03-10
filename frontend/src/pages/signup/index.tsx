import Head from "next/head"
import Image from "next/image"
import styles from '../../../styles/Home.module.scss'
import logo from '../../../public/logo.svg'
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export default function Signup() {
    return (
        <>
            <Head>
                <title>Faça seu cadastro agora</title>
            </Head>

            <div className={styles.containerCenter}>
                <Image src={logo} alt="Sujeito Pizzaria" />


                <div className={styles.login}>
                    <h1>Criando sua conta</h1>

                    <form action="">
                        <Input
                            placeholder="Digite seu nome"
                            type="text" />

                        <Input
                            placeholder="Digite seu email"
                            type="text" />

                        <Input
                            placeholder="Digite sua senha"
                            type="password" />

                        <Button
                            type="submit"
                            loading={false}
                        >
                            Cadastrar
                        </Button>

                    </form>
                    <Link href="/">
                        <span className={styles.text}>Já possui conta ? Faça o login</span>
                    </Link>
                </div>

            </div>




        </>
    )
}
