<script>
    let md = require('markdown-it')();

    /**
     * Expects raw to be of the following structure:
     * {
     *     "contact": {
     *         "required": false,
     *         "desc": "foo",
     *         "$block": {
     *           "name": {
     *             "required": true,
     *             "desc": "bar"
     *           }
     *         }
     *     },
     *     "simple": "Simple description with required as false"
     * }
     * @param create
     * @param raw
     * @returns {table}
     */
    let createTable = function (create, raw) {
        let table = create('table', [
            create('tr', [
                create('th', 'Field'),
                create('th', 'Description')])
        ]);
        Object.keys(raw).forEach(key => {
            let row = raw[key];

            // Allow short hands.
            if (typeof row === 'string') {
                row = {
                    desc: row
                }
            }

            let descText = row.desc;

            if (descText.endsWith('.')) {
                descText = descText.substring(0, descText.length - 1);
            }

            if (row.required) {
                descText = "**Required**. " + descText;
            }

            let descRendered = md.renderInline(descText);

            let descContainer = create('span', {domProps:{innerHTML: descRendered}}, []);
            let desc = create('td', [descContainer]);
            if (row['$block']) {
                desc.children.push(createTable(create, row['$block']));
            }

            table.children.push(create('tr', [
                create('td', [create('code', key)]),
                desc
            ]));
        });
        return table;
    };
    export default {
        name: 'json-table',

        render: function (create) {
            let tables = [];
            this.$slots.default.forEach(vNode => {
                vNode.children.forEach(child => {
                    let raw = JSON.parse(child.text);
                    tables.push(createTable(create, raw));
                })
            });

            return create('div', tables);
        }
    }
</script>

<style scoped>
    table {
        line-height: 22px;
    }
</style>