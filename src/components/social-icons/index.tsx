import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const components = {
    mail: IoMail,
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaSquareXTwitter,
    instagram: FaInstagram,
}

type SocialIconProps = {
    kind: keyof typeof components
    href: string | undefined
    size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
    if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
        return null

    const SocialIcon = components[kind]

    return (
        <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
        >
            <span className="sr-only">{kind}</span>
            <SocialIcon
                size={30}
                className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
            />
        </a>
    )
}

export default SocialIcon
