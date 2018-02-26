package org.dselent.course_load_scheduler.client.gin;

import org.dselent.course_load_scheduler.client.presenter.impl.ExamplePresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.*;
import org.dselent.course_load_scheduler.client.service.impl.*;
import org.dselent.course_load_scheduler.client.view.impl.*;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.shared.SimpleEventBus;
import com.google.gwt.inject.client.GinModules;
import com.google.gwt.inject.client.Ginjector;


/**
 * Interface required by gin due to lack of runtime reflections
 * Provide methods to get all objects that are to be injected
 * 
 * GinModules annotation: indicates what the module file is
 * 
 * @author dselent
 *
 */
@GinModules(InjectorModule.class)
public interface Injector extends Ginjector
{
	// GIN generator will instantiate this
	// GWT.create uses deferred bindings where many permutations are created but only one
	// is used at runtime (the one for the specific browser)
    public static final Injector INSTANCE = GWT.create(Injector.class);
 
    // event bus
    public SimpleEventBus getEventBus();
    
    // presenters
    public IndexPresenterImpl getIndexPresenter();
    public LoginPresenterImpl getLoginPresenter();
    public ExamplePresenterImpl getExamplePresenter();
    public LoginPagePresenterImpl getLoginPagePresenter();
    public CreateAccountPresenterImpl getCreateAccountPresenter();
    public ViewCoursesPresenterImpl getViewCoursesPresenter();
    public AddCoursePresenterImpl getAddCoursePresenter();
    public EditCoursePresenterImpl getEditCoursePresenter();
    public EditSectionPresenterImpl getEditSectionPresenter();
    public AddSectionPresenterImpl getAddSectionPresenter();
    public AdminCalendarPresenterImpl getAdminCalendarPresenter();
    public HomePresenterImpl getHomePresenter();
    public ManageUserPresenterImpl getManageUserPresenter();
    
    //views
    public IndexViewImpl getIndexView();
    public LoginViewImpl getLoginView();
    public LoginPageViewImpl getLoginPageView();
    public CreateAccountViewImpl getCreateAccountView();
    public ViewCoursesViewImpl getViewCoursesView();
    public AddCourseViewImpl getAddCourseView();
    public EditCourseViewImpl getEditCourseView();
    public EditSectionViewImpl getEditSectionView();
    public AddSectionViewImpl getAddSectionView();
    public AdminCalendarViewImpl getAdminCalendarView();
    public HomeViewImpl getHomeView();
    public ManageUserViewImpl getManageUserView();
    public ExampleViewImpl geExampleView();
        
    // services
    public UserServiceImpl getUserService();
    public ScheduleServiceImpl getScheduleService();
    public CreateAccountServiceImpl getCreateAccountService();
    public HomeServiceImpl getHomeService();
	public MapServiceImpl getMapService();
	public CourseServiceImpl getCourseService();
	public SectionServiceImpl getSectionService();
}
