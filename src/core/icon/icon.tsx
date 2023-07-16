import { FC, ReactNode } from 'react'
import styles from './icon.module.css'
import { bind } from '@/styles/bind'

const cx = bind(styles)

interface IconProps {
  icon: ReactNode
  className?: string
}

export const Icon: FC<IconProps> = ({ icon, className }) => {
  return (
    <div className={cx('icon', className)} role="img">
      {icon}
    </div>
  )
}
