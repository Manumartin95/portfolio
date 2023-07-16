import { ReactNode } from 'react'
import { Icon } from '@/features/shared/delivery/components/icon/icon'
import { Github } from '@/features/shared/delivery/components/icon/icons/github'
import { bind } from '@/styles/bind'
import styles from './social-media.module.css'
import { Linkedin } from '@/features/shared/delivery/components/icon/icons/linkedin'

const cx = bind(styles)

interface MediaIcon {
  icon: ReactNode
  url: string
}

const socialMedia: MediaIcon[] = [
  {
    icon: <Icon className={cx('icon')} icon={<Github />} />,
    url: 'https://github.com/Manumartin95'
  },
  {
    icon: <Icon className={cx('icon')} icon={<Linkedin />} />,
    url: 'https://www.linkedin.com/in/manuel-martin-ramos/'
  }
]
export const SocialMedia = () => {
  return (
    <ul className={cx('icon-list')}>
      {socialMedia.map((media, index) => (
        <li key={index}>
          <a href={media.url} target="_blank">
            {media.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
