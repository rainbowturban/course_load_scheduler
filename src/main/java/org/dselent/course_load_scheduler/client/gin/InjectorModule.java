package org.dselent.course_load_scheduler.client.gin;

import org.dselent.course_load_scheduler.client.presenter.AddCoursePresenter;
import org.dselent.course_load_scheduler.client.presenter.AddSectionPresenter;
import org.dselent.course_load_scheduler.client.presenter.EditCoursePresenter;
import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.presenter.LoginPresenter;
import org.dselent.course_load_scheduler.client.presenter.ViewCoursesPresenter;
import org.dselent.course_load_scheduler.client.presenter.impl.AddCoursePresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.AddSectionPresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.EditCoursePresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.IndexPresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.LoginPresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.ViewCoursesPresenterImpl;
import org.dselent.course_load_scheduler.client.view.AddCourseView;
import org.dselent.course_load_scheduler.client.view.AddSectionView;
import org.dselent.course_load_scheduler.client.view.EditCourseView;
import org.dselent.course_load_scheduler.client.view.IndexView;
import org.dselent.course_load_scheduler.client.view.LoginView;
import org.dselent.course_load_scheduler.client.view.ViewCoursesView;
import org.dselent.course_load_scheduler.client.view.impl.AddCourseViewImpl;
import org.dselent.course_load_scheduler.client.view.impl.AddSectionViewImpl;
import org.dselent.course_load_scheduler.client.view.impl.EditCourseViewImpl;
import org.dselent.course_load_scheduler.client.view.impl.IndexViewImpl;
import org.dselent.course_load_scheduler.client.view.impl.LoginViewImpl;
import org.dselent.course_load_scheduler.client.view.impl.ViewCoursesViewImpl;

import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.inject.client.AbstractGinModule;
import com.google.inject.Singleton;

/**
 * Module where all to-be-injected dependencies are defined
 * 
 * @author dselent
 *
 */
public class InjectorModule extends AbstractGinModule
{
	@Override
    protected void configure()
    {
		// event bus
        bind(SimpleEventBus.class).in(Singleton.class);
        
        // presenters
        bind(IndexPresenter.class).to(IndexPresenterImpl.class).in(Singleton.class);
        bind(LoginPresenter.class).to(LoginPresenterImpl.class).in(Singleton.class);
        bind(ViewCoursesPresenter.class).to(ViewCoursesPresenterImpl.class).in(Singleton.class);
        bind(AddCoursePresenter.class).to(AddCoursePresenterImpl.class).in(Singleton.class);
        bind(EditCoursePresenter.class).to(EditCoursePresenterImpl.class).in(Singleton.class);
//        bind(EditSectionPresenter.class).to(EditSectionPresenterImpl.class).in(Singleton.class);//Un-comment when class exists!
        bind(AddSectionPresenter.class).to(AddSectionPresenterImpl.class).in(Singleton.class);
        
        // views
        bind(IndexView.class).to(IndexViewImpl.class).in(Singleton.class);
        bind(LoginView.class).to(LoginViewImpl.class).in(Singleton.class);
        bind(ViewCoursesView.class).to(ViewCoursesViewImpl.class).in(Singleton.class);
        bind(AddCourseView.class).to(AddCourseViewImpl.class).in(Singleton.class);
        bind(EditCourseView.class).to(EditCourseViewImpl.class).in(Singleton.class);
//        bind(EditSectionView.class).to(EditSectionViewImpl.class).in(Singleton.class);//Un-comment when class exists!
        bind(AddSectionView.class).to(AddSectionViewImpl.class).in(Singleton.class);
    }
	
	/*
	 * Tried playing with this but had unresolved issues
	@Provides @Singleton @Inject
	public LoginPresenter provideLoginPresenter(IndexPresenter parentPresenter)
	{
	    return new LoginPresenter(parentPresenter);
	}
	*/
}