/* @flow weak */
var dividItem = { name: '-' }
var items = [
  {
    name: 'New File',
    icon: '',
    command: 'file:new_file'
  }, {
    name: 'Delete...',
    icon: '',
    command: 'file:delete'
  }, {
    name: 'Rename...',
    icon: '',
    command: 'file:rename'
  }, {
    name: 'Download',
    icon: '',
    command: 'file:download'
  }, {
    name: 'Upload',
    icon: '',
    command: () => {
      // reset the files selected from last round
      document.getElementById('filetree-hidden-input-form').reset()
      const input = document.getElementById('filetree-hidden-input')
      input.dispatchEvent(new MouseEvent('click'))
    },
    visible: ctx => Boolean(ctx.isDir)
  }
]

export default items
