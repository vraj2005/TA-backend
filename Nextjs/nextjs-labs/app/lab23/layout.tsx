import React, { Children } from 'react'
import Link from 'next/link'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Link href="/lab23/">lab23 Home</Link>
        <br />
        <Link href="/lab23/api/hello">Lab-23-2 Api hello</Link>
        <br />
        <Link href="/lab23/api/student">Lab-23-3 Api student Main crud</Link>
        <br />
        <Link href="/lab23/api/product">Lab-23-3 Api product</Link>
        <br />
        <Link href="/lab23/feed">Feed</Link>
        <br />
        <Link href="/lab23/student">Lab-23-3 Api student Main crud</Link>

        {children}
    </div>
  )
}
