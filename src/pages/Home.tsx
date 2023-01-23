import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import githubIcon from '../assets/icons/githubIcon.svg'
import companyIcon from '../assets/icons/companyIcon.svg'
import followersIcon from '../assets/icons/followersIcon.svg'
import arrowIcon from '../assets/icons/arrowIcon.svg'



interface userProps {
  name?: string
  bio?: string
  login?: string
  avatar_url?: string
  company?: string
  followers?: number
  html_url?: string
}


export function Home() {
  const [userData, setUserData] = useState({} as userProps)

  useEffect(() => {
    api
      .get('/users/saturdayintokyo')
      .then((response) => setUserData(response.data))
      .catch((err) => {
        console.error('An error occurred: ' + err);
      })
  }, [])

  return (
    <div className="flex flex-col justify-center w-4/6 mx-auto max-w-max min-w-[25%]">
      <div className="flex items-center justify-center mt-[-5rem] bg-base-profile px-10 py-8 rounded-xl gap-8 ">
        <div>
          <img className="rounded-lg max-w-[150px]" src={userData?.avatar_url} alt="Abrir perfil em outra aba" />
        </div>
        <div className="flex flex-col">
          <header className="flex justify-between mb-2">
            <h1 className="text-2xl font-bold text-base-title">{userData?.name}</h1>
            <a className="font-bold flex items-center gap-2 text-blue" target="_blank" href={userData.html_url}>
              GITHUB
              <img className="w-4" src={arrowIcon} alt="" />
            </a>
          </header>
          <p className="mb-6">{userData.bio}</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2 text-base-subtitle">
              <img className="w-5" src={githubIcon} alt="" />
              {userData.login}
            </span>
            <span className="flex items-center gap-2 text-base-subtitle">
              <img className="w-5" src={companyIcon} alt="" />
              {userData.company}
            </span>
            <span className="flex items-center gap-2 text-base-subtitle">
              <img className="w-5" src={followersIcon} alt="" />
              {userData.followers} seguidores
            </span>
          </div>
        </div>
      </div>
    </div>

  )
}