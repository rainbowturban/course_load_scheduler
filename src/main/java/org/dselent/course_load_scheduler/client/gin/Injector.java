package org.dselent.course_load_scheduler.client.gin;

import org.dselent.course_load_scheduler.client.presenter.impl.IndexPresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.LoginPresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.ViewCoursesPresenterImpl;
import org.dselent.course_load_scheduler.client.view.impl.IndexViewImpl;
import org.dselent.course_load_scheduler.client.view.impl.LoginViewImpl;
import org.dselent.course_load_scheduler.client.view.impl.ViewCoursesViewImpl;

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
    public ViewCoursesPresenterImpl getViewCoursesPresenter();
    
    //views
    public IndexViewImpl getIndexView();
    public LoginViewImpl getLoginView();
    public ViewCoursesViewImpl getViewCoursesView();
}
