
<script>
    /**
     * The only true button.
     * @displayName Best Button
     */
    import './Text.scss'

    export default {
        name: 'Text',
        props: {
            align: {
                type: String,
                default: '#333',
                value: 'red'
            },


            size: {
                type: String,
                default: 'normal'
            },
        }
      
    }
</script>