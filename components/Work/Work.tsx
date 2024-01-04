import { ArrowUpRightIcon } from '@components/Work/Ui/ArrowUpRight'
import Slider from '@components/Work/Ui/Slider'
import { works } from '@components/Work/WorkInterface'

export function Work(work: (typeof works)[number]) {
  return (
    <article>
      <header className='flex items-center gap-x-4'>
        <a
          href={work.link}
          target='_blank'
          rel='noopener noreferrer'
          className='group relative h-12 w-12 shrink-0 overflow-hidden rounded-lg ring-1 ring-theme-outline ring-offset-2 ring-offset-workuiblack'
        >
          <img
            src={work.logo}
            alt={work.title}
            width={48}
            height={48}
            className='h-full w-full rounded-lg'
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <div className='absolute inset-0 flex items-center justify-center rounded-lg bg-black/50 opacity-0 transition-opacity group-hover:opacity-100'>
            <ArrowUpRightIcon width={24} height={24} className='text-white' />
          </div>
        </a>
        <div>
          <h3 className='leading-none mb-1'>
            <a
              href={work.link}
              target='_blank'
              rel='noopener noreferrer'
              className='external-link'
            >
              {work.title}
            </a>
          </h3>

          <span className='text-sm leading-none text-theme-subtext'>
            {new Date(work.startDate).getFullYear()}-
            {new Date(work.endDate).getFullYear().toString().substring(2)}
          </span>
        </div>
      </header>

      <div className='mt-4'>
        <p>{work.description}</p>
        {work.slides && <Slider slides={work.slides} />}
      </div>
    </article>
  )
}
