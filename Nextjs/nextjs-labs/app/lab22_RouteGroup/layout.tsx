import React, { Children } from 'react'
import Link from 'next/link'

export default function layoutroutegroup({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Link href="/lab22_RouteGroup">route group home</Link>
        <br />
        <Link href="/lab22_RouteGroup/dashboard">Admin-Dashboard</Link>
        <br />
        <Link href="/lab22_RouteGroup/login">Client-Login</Link>
        {children}
    </div>
  )
}
