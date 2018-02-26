package org.dselent.course_load_scheduler.client.gin;

import org.dselent.course_load_scheduler.client.presenter.ExamplePresenter;
import org.dselent.course_load_scheduler.client.presenter.impl.ExamplePresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.*;
import org.dselent.course_load_scheduler.client.presenter.impl.*;
import org.dselent.course_load_scheduler.client.view.*;
import org.dselent.course_load_scheduler.client.view.impl.*;
import org.dselent.course_load_scheduler.client.service.*;
import org.dselent.course_load_scheduler.client.service.impl.*;
import org.dselent.course_load_scheduler.client.view.ExampleView;
import org.dselent.course_load_scheduler.client.view.impl.ExampleViewImpl; 

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
		bind(LoginPagePresenter.class).to(LoginPagePresenterImpl.class).in(Singleton.class);
		bind(CreateAccountPresenter.class).to(CreateAccountPresenterImpl.class).in(Singleton.class);
		bind(ViewCoursesPresenter.class).to(ViewCoursesPresenterImpl.class).in(Singleton.class);
		bind(AddCoursePresenter.class).to(AddCoursePresenterImpl.class).in(Singleton.class);
		bind(EditCoursePresenter.class).to(EditCoursePresenterImpl.class).in(Singleton.class);
		bind(EditSectionPresenter.class).to(EditSectionPresenterImpl.class).in(Singleton.class);
		bind(AddSectionPresenter.class).to(AddSectionPresenterImpl.class).in(Singleton.class);
		bind(AdminCalendarPresenter.class).to(AdminCalendarPresenterImpl.class).in(Singleton.class);
		bind(HomePresenter.class).to(HomePresenterImpl.class).in(Singleton.class);
		bind(ManageUserPresenter.class).to(ManageUserPresenterImpl.class).in(Singleton.class);
		bind(ExamplePresenter.class).to(ExamplePresenterImpl.class).in(Singleton.class);

		// views
		bind(IndexView.class).to(IndexViewImpl.class).in(Singleton.class);
		bind(LoginView.class).to(LoginViewImpl.class).in(Singleton.class);
		bind(LoginPageView.class).to(LoginPageViewImpl.class).in(Singleton.class);
		bind(CreateAccountView.class).to(CreateAccountViewImpl.class).in(Singleton.class);
		bind(ViewCoursesView.class).to(ViewCoursesViewImpl.class).in(Singleton.class);
		bind(AddCourseView.class).to(AddCourseViewImpl.class).in(Singleton.class);
		bind(EditCourseView.class).to(EditCourseViewImpl.class).in(Singleton.class);
		bind(EditSectionView.class).to(EditSectionViewImpl.class).in(Singleton.class);
		bind(AddSectionView.class).to(AddSectionViewImpl.class).in(Singleton.class);
		bind(AdminCalendarView.class).to(AdminCalendarViewImpl.class).in(Singleton.class);
		bind(HomeView.class).to(HomeViewImpl.class).in(Singleton.class);
		bind(ManageUserView.class).to(ManageUserViewImpl.class).in(Singleton.class);
		bind(ExampleView.class).to(ExampleViewImpl.class).in(Singleton.class);
		        
		//services
		bind(UserService.class).to(UserServiceImpl.class).in(Singleton.class);
		bind(ScheduleService.class).to(ScheduleServiceImpl.class).in(Singleton.class);
		bind(CreateAccountService.class).to(CreateAccountServiceImpl.class).in(Singleton.class);
		bind(HomeService.class).to(HomeServiceImpl.class).in(Singleton.class);
		bind(MapService.class).to(MapServiceImpl.class).in(Singleton.class);
		bind(CourseService.class).to(CourseServiceImpl.class).in(Singleton.class);
		bind(SectionService.class).to(SectionServiceImpl.class).in(Singleton.class);

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