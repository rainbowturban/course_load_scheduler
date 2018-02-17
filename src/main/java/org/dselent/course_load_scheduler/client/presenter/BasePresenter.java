package org.dselent.course_load_scheduler.client.presenter;

import org.dselent.course_load_scheduler.client.model.Model;
import org.dselent.course_load_scheduler.client.view.BaseView;

import com.google.gwt.user.client.ui.HasWidgets;

/**
 * Super intefrace for all presenters
 * 
 * @author dselent
 *
 */
public interface BasePresenter
{
	/**
	 * Initializes the presenter after the constructor
	 * PostConstruct annotation will not work because it will execute before the event bus gets injected
	 * Must manually call init()
	 */
	void init();
	
	/**
	 * Removes the previous panel from the index view place holder
	 * Displays the current panel ("container")
	 */
	void go(HasWidgets container);
	
	/**
	 * Returns the view associated with the presenter
	 */
	BaseView<? extends BasePresenter> getView();
	
	/**
	 * Returns the models associated with the presenter
	 */
	Model getModel();
	
	/**
	 * Binds all specified event handlers to the presenter
	 */
	void bind();
	
	/**
	 * Unbinds all speficied event handlers to the presenter
	 */
	void unbind();
}
