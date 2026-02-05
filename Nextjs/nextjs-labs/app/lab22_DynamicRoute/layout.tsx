import React, { Children } from 'react'
import Link from 'next/link'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Link href="/lab22_DynamicRoute">Dynamic Route Home</Link>
        <br />
        <Link href="/lab22_DynamicRoute/dynamic/123">Dynamic Route with ID 123</Link>
        <br />
        <Link href="/lab22_DynamicRoute/dynamic-range/1/20">Dynamic Range from 1 to 20</Link>
        <br />
        <Link href="/lab22_DynamicRoute/pagination/2">Pagination Page 2</Link>
        {children}
    </div>
  )
}
