import { Metadata } from 'next'

import { SidebarNav } from '@/components/settings/sidebar-nav'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Advanced form example using react-hook-form and Zod.',
}

const sidebarNavItems = [
  {
    title: 'Perfil',
    href: '/settings',
  },
  {
    title: 'Conta',
    href: '/settings/account',
  },
  {
    title: 'Aparência',
    href: '/settings/appearance',
  },
  {
    title: 'Notificações',
    href: '/settings/notifications',
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Configurações</h2>
          <p className="text-muted-foreground">
            Gerencie suas configurações de perfil, conta, aparência e
            notificações.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-3xl">{children}</div>
        </div>
      </div>
    </>
  )
}
