import util from 'util';
import gulp from 'gulp';
import {DefaultReleaseRegistry, release} from 'gulp-release-it';

util.inherits(CustomGulpReleaseRegistry, DefaultReleaseRegistry);

function CustomGulpReleaseRegistry() {
    DefaultReleaseRegistry.call(this);
}

CustomGulpReleaseRegistry.prototype.init = function (takerInst) {
    takerInst.task('pre-tag-and-push', function (cb) {
        console.log('i can override default task definition');
        cb();
    });
};

release(gulp, [new CustomGulpReleaseRegistry()]);
