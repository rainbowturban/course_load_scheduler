package org.dselent.course_load_scheduler.client;

import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.presenter.impl.IndexPresenterImpl;
import org.dselent.course_load_scheduler.client.presenter.impl.LoginPresenterImpl;
import org.dselent.course_load_scheduler.client.view.IndexView;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.RootLayoutPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class CourseLoadScheduler implements EntryPoint
{

	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad()
	{
		RootLayoutPanel root = RootLayoutPanel.get();
		
		//SimplePanelExample simplePanelExample = new SimplePanelExample();
		//root.add(simplePanelExample);
		
		//SimplePanelExample2 simplePanelExample2 = new SimplePanelExample2();
		//root.add(simplePanelExample2);
		
		//HTMLPanelExample htmlPanelExample = new HTMLPanelExample();
		//root.add(htmlPanelExample);
		
		//FlowPanelExample flowPanelExample = new FlowPanelExample();
		//root.add(flowPanelExample);
		
		//VerticalPanelExample verticalPanelExample = new VerticalPanelExample();
		//root.add(verticalPanelExample);
		
		//HorizontalPanelExample horizontalPanelExample = new HorizontalPanelExample();
		//root.add(horizontalPanelExample);
		
		//DockLayoutPanelExample dockLayoutPanelExample = new DockLayoutPanelExample();
		//root.add(dockLayoutPanelExample);
		
		//GridExample gridExample = new GridExample();
		//root.add(gridExample);

		//TabLayoutPanelExample tabLayoutPanelExample = new TabLayoutPanelExample();
		//root.add(tabLayoutPanelExample);
		
		//ExamplesPanel examplesPanel = new ExamplesPanel();
		//root.add(examplesPanel);

		// Get the injector, which injected objects can be retrieved from
		final Injector injector = Injector.INSTANCE;
		
		IndexPresenterImpl indexPresenter = injector.getIndexPresenter(); // on-demand injection
		indexPresenter.init();
		IndexView indexView = indexPresenter.getView();		
		
		LoginPresenterImpl loginPresenter = injector.getLoginPresenter();
		loginPresenter.init();
		//LoginView loginView = loginPresenter.getView();	
		
		//indexPresenter.go(RootPanel.get("indexContainer"));
		indexPresenter.go(root);
		loginPresenter.go(indexView.getViewRootPanel());
	}
}
