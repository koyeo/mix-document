import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: '项目生成',
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
        description: (
            <>
                通过定义项目组件，如服务、API、方法、组件、SDK等来生成项目代码，支持数据库常规 CURD 操作，
                同时生成的代码块都可以自定义覆盖。
            </>
        ),
    },
    {
        title: '自动运行',
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                通过对程序包依赖分析，实现更高效的监听运行，同时对程序运行状态进行监控，在程序退出时能够收到桌面通知。
            </>
        ),
    },
    {
        title: '接口测试',
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                无需额外的操作，生成接口自动支持接口调用调试，同时你可以指定自己的访问环境，请求信息，让一切自然连接起来。
            </>
        ),
    },
    {
        title: '版本比较',
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                提供了数据库版本比较和接口版本比较功能，同时生成建议的版本号和数据库迁移语句。
            </>
        ),
    },
    {
        title: '集成部署',
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                可快速的将项目进行构建部署，在需要部署自动生成的程序时，仅提供服务器信息即可。
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
                            上手指南
                        </Link>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={'https://mix-releases-1301916718.cos.ap-guangzhou.myqcloud.com/releases/mix-0.3.2/mix-0.3.2.dmg'}>
                            立即下载
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
