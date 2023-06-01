import { style } from '@vanilla-extract/css'

export const story = style({
  color: '#373737'
})

export const storyHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '4px',
  lineHeight: '24px'
})

export const storyFooter = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  lineHeight: '24px',
  fontSize: '12px'
})

export const storyLink = style({
  color: '#828282',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
})
