import React, {useEffect} from 'react';
import {Box, Card, CardActions, CardMedia, createStyles, Typography, useTheme} from "@material-ui/core";
import {makeStyles, Theme} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';
import formExample from '../image/formExample.png'
import {MEDIAS, SOCKET} from "../constant/Routes";
import {httpClient} from "../utils/asyncUtils";

interface Props {
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        articleContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'flex-start',
        },
        cardContainer: {
            // 适配电脑
            // width: 350,
            // background:'orange',
            margin: theme.spacing(1),
            // 适配 iPad/iPad 竖屏
            [theme.breakpoints.up("xs")]: {
                width: '100%',
                // background:'yellow'
            },
            // 适配 iPad/iPad 横屏
            [theme.breakpoints.up("sm")]: {
                width: '48%',
                margin: '1%',
                // background:'green'
            },
            // 适配 横屏iPad
            [theme.breakpoints.up("md")]: {
                width: '30%',
                margin: '1.5%',
                // background:'pink'
            },
            // 适配最大宽度 lg
            [theme.breakpoints.up("lg")]: {
                width: '22%',
                margin: '1.5%',
                // background:'red'
            },
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        gridList: {
            // width: 500,
        },
        icon: {
            color: 'rgba(214,9,9,0.54)',
        },
    }),
);
const tileData = [
    {img: formExample, title: 'Media EXAMPLE & DOC', author: 'visionary', path: MEDIAS},
    {img: formExample, title: 'socket.io EXAMPLE & DOC', author: 'visionary', path: SOCKET},
    {img: formExample, title: '表单 EXAMPLE & DOC', author: 'visionary', path: '/form'},
    {img: formExample, title: '分页列表 EXAMPLE & DOC', author: 'visionary', path: '/listPages'},
    {img: formExample, title: '流式列表 EXAMPLE & DOC', author: 'visionary', path: '/lists'},
    {img: formExample, title: '详情 EXAMPLE & DOC', author: 'visionary', path: ''},
    {img: formExample, title: '主题切换 EXAMPLE & DOC', author: 'visionary', path: '/theme'},
    {img: formExample, title: '布局 EXAMPLE & DOC', author: 'visionary', path: '/layout'},
    {img: formExample, title: '样式常量 EXAMPLE & DOC', author: 'visionary', path: ''},
    {img: formExample, title: 'PLog', author: 'visionary'},
]



const ArticleContainer: React.FC<Props> = () => {
    const classes = useStyles();
    const theme = useTheme();
    useEffect(() => {
        httpClient('/api/hi').then(res => {
            console.log(res)
        })
    },[])
    // deps 没的话 useEffect只走一遍
    return (
        <Box className={classes.articleContainer}>
            {tileData.map((tile) => (
                <Card key={Math.random()} className={classes.cardContainer}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={tile.img}
                        title={tile.title}
                    />
                    <CardActions>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {tile.title}
                        </Typography>
                        <IconButton component={'a'} href={tile.path} aria-label={`info about ${tile.title}`}
                                    className={classes.icon}>
                            <InfoIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
        </Box>
    )
}
export default ArticleContainer;
