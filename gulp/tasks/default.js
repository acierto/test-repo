import gulp from 'gulp';
import {DefaultReleaseRegistry, release} from 'gulp-release-it';

class CustomGulpReleaseRegistry extends DefaultReleaseRegistry {
    init(takerInst) {
        takerInst.task('pre-tag-and-push', (cb) => {
            console.log('i can override default task definition');
            cb();
        });
    }
}

release(gulp, [new CustomGulpReleaseRegistry()]);
